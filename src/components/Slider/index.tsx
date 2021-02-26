import SlickSlider, { Settings } from 'react-slick';

import * as SC from './styles';

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

const Slider = ({ children, settings }: SliderProps) => (
  <SC.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </SC.Wrapper>
);

export default Slider;
