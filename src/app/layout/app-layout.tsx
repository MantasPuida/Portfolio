import * as React from "react";
import { AppHeader } from "../header/app-header";

interface Props {
    children: React.ReactNode;
}

export class AppLayout extends React.PureComponent<Props> {
    public render(): React.ReactNode {
        const { children } = this.props;

        return <AppHeader>{children}</AppHeader>;
    }
}
