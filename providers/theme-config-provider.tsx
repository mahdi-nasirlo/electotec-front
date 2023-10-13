import React from 'react';
import {ConfigProvider} from "antd";
import themeConfig from "@/lib/theme-config";

function ThemeConfigProvider(props: { children: React.ReactNode }) {
    return (
        <ConfigProvider theme={themeConfig}>{props.children}</ConfigProvider>
    );
}

export default ThemeConfigProvider;