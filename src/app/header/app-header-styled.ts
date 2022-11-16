import Slide, { SlideProps } from "@mui/material/Slide/Slide";
import { styled } from "@mui/material/styles";

interface SlideStyledProps extends SlideProps {
    width: string;
}

export const SlideStyled = styled(Slide)<SlideStyledProps>(({ width }) => ({
    maxWidth: width
}));
