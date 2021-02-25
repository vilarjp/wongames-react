import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart,
} from '@styled-icons/material-outlined';

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import Button from 'components/Button';

import * as SC from './styles';

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
  onFav?: () => void;
};

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav,
}: GameCardProps) => {
  return (
    <SC.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <SC.ImageBox>
        <img src={img} alt={title} />
      </SC.ImageBox>

      <SC.Content>
        <SC.Info>
          <SC.Title>{title}</SC.Title>
          <SC.Developer>{developer}</SC.Developer>
        </SC.Info>

        <SC.FavButton onClick={onFav} role="button">
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </SC.FavButton>

        <SC.BuyBox>
          {!!promotionalPrice && <SC.Price isPromotional>{price}</SC.Price>}
          <SC.Price>{promotionalPrice || price}</SC.Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </SC.BuyBox>
      </SC.Content>
    </SC.Wrapper>
  );
};

export default GameCard;
