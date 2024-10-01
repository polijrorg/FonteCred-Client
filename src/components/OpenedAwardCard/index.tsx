/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import ConfirmAddress from 'components/ConfirmAdressComponent';
import CouponService from 'services/CouponService';
import RedeemService from 'services/RedeemService';
import * as S from './styles';

interface ProductCardProps {
    product: {
        name: string;
        description: string;
        percentage: number;
        sizes: { id: string; value: string; optionId: string }[]; // Atualizado para refletir o tipo correto
        colors?: { id: string; value: string; optionId: string }[]; // Atualizado para refletir o tipo correto
        isCoupon: boolean;
        prizeCode: string;
        imageUrl: string;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isCouponMode, setIsCouponMode] = useState(false);
    const [couponCode, setCouponCode] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);
    const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

    const handleRedeemClick = async () => {
        try {
            const clientData = await CouponService.getClientData();
            const userProgression = clientData.progression;

            if (userProgression >= product.percentage) {
                if (product.isCoupon) {
                    await RedeemService.redeemPrize({
                        prizeCode: product.prizeCode,
                        prizeVersion: 0
                    });
                    setIsCouponMode(true);
                } else {
                    if (
                        (product.sizes.length > 0 && !selectedSizeId) ||
                        (product.colors &&
                            product.colors.length > 0 &&
                            !selectedColorId)
                    ) {
                        alert(
                            'Por favor, selecione o tamanho e/ou a cor do produto antes de resgatar.'
                        );
                        return;
                    }

                    const selectedOptions = [];
                    if (selectedSizeId) {
                        selectedOptions.push({
                            optionId:
                                product.sizes.find(
                                    (size) => size.id === selectedSizeId
                                )?.optionId || '', // ID da opção do tamanho
                            valueId: selectedSizeId
                        });
                    }
                    if (selectedColorId) {
                        selectedOptions.push({
                            optionId:
                                product.colors?.find(
                                    (color) => color.id === selectedColorId
                                )?.optionId || '', // ID da opção da cor
                            valueId: selectedColorId
                        });
                    }

                    await RedeemService.redeemPhysicalPrize({
                        prizeCode: product.prizeCode,
                        prizeVersion: 0,
                        selectedOptions
                    });

                    alert('Produto resgatado com sucesso!');
                    setShowConfirmModal(true);
                }
            } else {
                alert(
                    'Você não possui porcentagem suficiente para resgatar este produto. Tente novamente mais tarde.'
                );
            }
        } catch (error) {
            console.error('Erro ao tentar resgatar o produto:', error);
            alert('Erro ao tentar resgatar o produto. Tente novamente.');
        }
    };

    const closeModal = () => {
        setShowConfirmModal(false);
        setIsCouponMode(false);
        setCouponCode(null);
    };

    useEffect(() => {
        const fetchCouponCode = async () => {
            if (product.isCoupon) {
                setLoading(true);
                try {
                    const clientData = await CouponService.getClientData();
                    const prize = clientData.availablePrizes.find(
                        (prize) => prize.prizeCode === product.prizeCode
                    );

                    if (prize && prize.couponCode) {
                        setCouponCode(prize.couponCode);
                    } else {
                        console.error('Cupom não encontrado para o produto');
                    }
                } catch (error) {
                    console.error('Erro ao buscar o cupom do cliente', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        if (isCouponMode) {
            fetchCouponCode();
        }
    }, [isCouponMode, product.isCoupon, product.prizeCode]);

    if (isCouponMode && product.isCoupon) {
        return (
            <S.CouponCard onClick={(e) => e.stopPropagation()}>
                <S.CouponHeader>
                    <S.CouponTitle>{product.name}</S.CouponTitle>
                </S.CouponHeader>
                <S.CouponDescription>{product.description}</S.CouponDescription>
                {loading ? (
                    <S.LoadingMessage>Carregando o cupom...</S.LoadingMessage>
                ) : couponCode ? (
                    <S.CouponCodeContainer>
                        <S.CouponCopySuccess>{couponCode}</S.CouponCopySuccess>
                        <S.CopyButton
                            onClick={() => {
                                navigator.clipboard.writeText(couponCode || '');
                                alert('Cupom copiado com sucesso!');
                            }}
                        >
                            Copiar
                        </S.CopyButton>
                    </S.CouponCodeContainer>
                ) : (
                    <S.ErrorMessage>Erro ao carregar o cupom</S.ErrorMessage>
                )}
                <S.CouponButton
                    onClick={() =>
                        navigator.clipboard.writeText(couponCode || '')
                    }
                >
                    Ir para o site do parceiro
                </S.CouponButton>
            </S.CouponCard>
        );
    }

    return (
        <S.Card onClick={(e) => e.stopPropagation()}>
            <S.ImageContainer>
                <S.Image
                    src={
                        product.imageUrl ||
                        'assets/images/placeholder-image.png'
                    }
                    alt="Imagem do Produto"
                />
            </S.ImageContainer>
            <S.Content>
                <S.ProductName>{product.name}</S.ProductName>
                <S.Description>{product.description}</S.Description>
                <S.Points>
                    <strong>PERCENTUAL PARA RESGATE:</strong>{' '}
                    {product.percentage}% <br />
                </S.Points>

                {/* Renderizando tamanhos disponíveis */}
                {product.sizes.length > 0 && (
                    <S.Sizes>
                        <strong>Tamanhos Disponíveis</strong>
                        <S.SizeOptions>
                            {product.sizes.map((size) => (
                                <S.SizeButton
                                    key={size.id}
                                    selected={selectedSizeId === size.id}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedSizeId(size.id);
                                    }}
                                >
                                    {size.value}
                                </S.SizeButton>
                            ))}
                        </S.SizeOptions>
                    </S.Sizes>
                )}

                {/* Renderizando cores disponíveis */}
                {product.colors && product.colors.length > 0 && (
                    <S.Colors>
                        <strong>Cores Disponíveis</strong>
                        <S.ColorOptions>
                            {product.colors.map((color) => (
                                <S.ColorButton
                                    key={color.id}
                                    selected={selectedColorId === color.id}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedColorId(color.id);
                                    }}
                                >
                                    {color.value}
                                </S.ColorButton>
                            ))}
                        </S.ColorOptions>
                    </S.Colors>
                )}
            </S.Content>
            <S.RedeemButton onClick={() => setShowConfirmModal(true)}>
                RESGATAR
            </S.RedeemButton>
            {showConfirmModal && (
                <S.ModalBackdrop onClick={closeModal}>
                    <S.ModalContainer onClick={(e) => e.stopPropagation()}>
                        <ConfirmAddress
                            onClose={closeModal}
                            onConfirm={handleRedeemClick}
                        />
                    </S.ModalContainer>
                </S.ModalBackdrop>
            )}
        </S.Card>
    );
};

export default ProductCard;
