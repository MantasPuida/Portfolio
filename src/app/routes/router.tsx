import * as React from "react";
import { AppLayout } from "../layout/app-layout";
import { AppRoutes } from "./routes";

export class AppRouter extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <AppLayout>
                <AppRoutes />
            </AppLayout>
        );
    }
}
