import * as React from "react";

interface Props {
    children?: React.ReactNode;
}

export class AppLayout extends React.PureComponent<Props> {
    public render(): React.ReactNode {
        const { children } = this.props;

        return children;
    }
}
