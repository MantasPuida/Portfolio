import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { AppRoutesPaths } from "./routes-paths";

import { Home } from "../views/home/home-view";
import { NoMatch } from "../views/no-match/no-match-view";

export class AppRoutes extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <Routes>
                <Route path={AppRoutesPaths.Home} element={<Home />} />
                <Route path={AppRoutesPaths.NoMatch} element={<NoMatch />} />
            </Routes>
        );
    }
}
