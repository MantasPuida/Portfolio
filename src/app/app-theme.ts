import { createTheme, Theme } from "@mui/material";
import { Configuration } from "./configuration";

class ThemeClass {
    public static defaultTheme: Theme = createTheme({
        typography: {
            button: {
                textTransform: "none"
            },
            fontFamily: Configuration.Fonts
        }
    });
}

export type AppTheme = Theme & ThemeClass;

export const AppThemeInstance: AppTheme = {
    ...new ThemeClass(),
    ...ThemeClass.defaultTheme
};
