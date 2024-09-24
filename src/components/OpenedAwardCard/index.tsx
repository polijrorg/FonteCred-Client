import React, { useState } from 'react';
import ConfirmAddress from 'components/ConfirmAdressComponent';
import * as S from './styles';

interface ProductCardProps {
    product: {
        name: string;
        description: string;
        percentage: number;
        sizes: string[]; // Tamanhos
        colors?: string[]; // Cores
        isCoupon: boolean; // Verificação se o item é um cupom
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isCouponMode, setIsCouponMode] = useState(false); // Estado para alternar para o modo cupom

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
    };

    // Se o estado de cupom estiver ativado, renderiza o card de cupom
    if (isCouponMode && product.isCoupon) {
        return (
            <S.CouponCard onClick={(e) => e.stopPropagation()}>
                <S.CouponHeader>
                    <S.CouponTitle>{product.name}</S.CouponTitle>
                </S.CouponHeader>
                <S.CouponDescription>{product.description}</S.CouponDescription>
                <S.CouponCopySuccess>
                    Código copiado com sucesso!
                </S.CouponCopySuccess>
                <S.CouponButton>
                    Copiar e ir para o site do parceiro
                </S.CouponButton>
            </S.CouponCard>
        );
    }

    // Caso não seja cupom ou o estado de cupom não esteja ativado, renderiza o layout padrão
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
                    {' '}
                    {/* Backdrop para escurecer o fundo */}
                    <S.ModalContainer onClick={(e) => e.stopPropagation()}>
                        {' '}
                        {/* O modal em si */}
                        <ConfirmAddress onClose={closeModal} />
                    </S.ModalContainer>
                </S.ModalBackdrop>
            )}
        </S.Card>
    );
};

export default ProductCard;
