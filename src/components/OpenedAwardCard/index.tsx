/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import ConfirmAddress from 'components/ConfirmAdressComponent';
import CouponService from 'services/CouponService';
import * as S from './styles';

interface ProductCardProps {
    product: {
        name: string;
        description: string;
        percentage: number;
        sizes: string[];
        colors?: string[];
        isCoupon: boolean;
        prizeCode: string;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isCouponMode, setIsCouponMode] = useState(false); // Estado para alternar para o modo cupom
    const [couponCode, setCouponCode] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleRedeemClick = () => {
        if (product.isCoupon) {
            setIsCouponMode(true); // Muda para o modo cupom
        } else {
            setShowConfirmModal(true);
        }
    };

    const closeModal = () => {
        setShowConfirmModal(false);
        setIsCouponMode(false); // Reseta o estado do cupom ao fechar o modal
        setCouponCode(null); // Limpa o cupom selecionado
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
                    src="path/to/placeholder-image.png"
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
                                    key={size}
                                    selected={selectedSize === size}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedSize(size);
                                    }}
                                >
                                    {size}
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
                                    key={color}
                                    selected={selectedColor === color}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedColor(color);
                                    }}
                                >
                                    {color}
                                </S.ColorButton>
                            ))}
                        </S.ColorOptions>
                    </S.Colors>
                )}
            </S.Content>
            <S.RedeemButton onClick={handleRedeemClick}>
                RESGATAR
            </S.RedeemButton>
            {showConfirmModal && (
                <S.ModalBackdrop onClick={closeModal}>
                    <S.ModalContainer onClick={(e) => e.stopPropagation()}>
                        <ConfirmAddress onClose={closeModal} />
                    </S.ModalContainer>
                </S.ModalBackdrop>
            )}
        </S.Card>
    );
};

export default ProductCard;
