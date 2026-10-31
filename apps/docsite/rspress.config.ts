import * as path from 'node:path';
import { pluginTailwindcss } from '@rsbuild/plugin-tailwindcss';
import { defineConfig, Sidebar } from '@rspress/core';

const component = (text: string, link: string) => ({ text, link });

const componentsSidebar: Sidebar = {
  "/components/": [
    {
      text: "基础组件",
      collapsed: false,
      items: [
        component("按钮 Button", "/#comp-button"),
        component("标签 Tag", "/#comp-badge"),
        component("头像 Avatar", "/#comp-avatar"),
        component("卡片 Card", "/#comp-card"),
        component("分割线 Divider", "/#comp-separator"),
        component("骨架屏 Skeleton", "/#comp-skeleton"),
        component("加载指示 Spin", "/#comp-spinner"),
        component("快捷键 Kbd", "/#comp-kbd"),
        component("代码块", "/#comp-code-block"),
        component("宽高比", "/#comp-aspect-ratio"),
        component("列表项", "/#comp-item"),
        component("切换按钮 Toggle", "/#comp-toggle"),
        component("切换按钮组 ToggleGroup", "/#comp-toggle-group"),
      ],
    },
    {
      text: "输入组件",
      collapsed: false,
      items: [
        component("输入框 Input", "/#comp-input"),
        component("多行输入 Textarea", "/#comp-textarea"),
        component("原生下拉", "/#comp-native-select"),
        component("下拉选择 Select", "/#comp-select"),
        component("组合选择 AutoComplete", "/#comp-combobox"),
        component("复选框 Checkbox", "/#comp-checkbox"),
        component("单选组 Radio", "/#comp-radio-group"),
        component("开关 Switch", "/#comp-switch"),
        component("滑动条 Slider", "/#comp-slider"),
        component("日历面板 Calendar", "/#comp-calendar"),
        component("验证码输入 PinCode", "/#comp-input-otp"),
        component("输入组", "/#comp-input-group"),
        component("字段容器 Field", "/#comp-field"),
        component("表单 Form", "/#comp-form"),
        component("表单标签 Label", "/#comp-label"),
      ],
    },
    {
      text: "浮层",
      collapsed: false,
      items: [
        component("对话框 Modal", "/#comp-dialog"),
        component("确认框", "/#comp-alert-dialog"),
        component("抽屉", "/#comp-drawer"),
        component("侧滑面板 SideSheet", "/#comp-sheet"),
        component("气泡卡片", "/#comp-popover"),
        component("文字提示", "/#comp-tooltip"),
        component("悬浮卡片", "/#comp-hover-card"),
        component("下拉菜单 Dropdown", "/#comp-dropdown-menu"),
        component("右键菜单", "/#comp-context-menu"),
        component("菜单栏", "/#comp-menubar"),
      ],
    },
    {
      text: "反馈",
      collapsed: false,
      items: [
        component("警示条 Banner", "/#comp-alert"),
        component("全局提示 Toast", "/#comp-toast"),
        component("Sonner Toast", "/#comp-sonner"),
        component("进度条 Progress", "/#comp-progress"),
        component("空状态 Empty", "/#comp-empty"),
      ],
    },
    {
      text: "导航",
      collapsed: false,
      items: [
        component("标签页 Tabs", "/#comp-tabs"),
        component("面包屑", "/#comp-breadcrumb"),
        component("分页 Pagination", "/#comp-pagination"),
        component("导航菜单 Navigation", "/#comp-navigation-menu"),
        component("侧边导航 Nav", "/#comp-sidebar"),
      ],
    },
    {
      text: "数据展示",
      collapsed: false,
      items: [
        component("表格 Table", "/#comp-table"),
        component("折叠面板 Collapse", "/#comp-accordion"),
        component("折叠区域 Collapsible", "/#comp-collapsible"),
        component("轮播 Carousel", "/#comp-carousel"),
        component("图表 Chart", "/#comp-chart"),
        component("伸缩分栏 Resizable", "/#comp-resizable"),
        component("滚动区域", "/#comp-scroll-area"),
        component("标记 Marker", "/#comp-marker"),
      ],
    },
    {
      text: "布局",
      collapsed: false,
      items: [
        component("按钮组 ButtonGroup", "/#comp-button-group"),
        component("方向 Direction", "/#comp-direction"),
      ],
    },
    {
      text: "AI 组件",
      collapsed: false,
      items: [
        component("对话气泡 Bubble", "/#comp-bubble"),
        component("附件 Attachment", "/#comp-attachment"),
        component("消息 Message", "/#comp-message"),
        component("消息滚动容器", "/#comp-message-scroller"),
        component("问卷 Questionnaire", "/#comp-questionnaire"),
        component("执行链路 Trace", "/#comp-trace"),
      ],
    },
  ],
};

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, 'tailwind.css'),
  builderConfig: {
    plugins: [pluginTailwindcss()],
    resolve: {
      // resolve the workspace package straight to its directory — going
      // through the node_modules symlink breaks inside the tailwind loader
      alias: {
        'shadcn-semi-design': path.join(__dirname, '../packages/ui'),
      },
    },
  },

  lang: "zh-CN",
  themeConfig: {
    nav: [],
    sidebar: {
      ...componentsSidebar,
      "/": [
        {
          text: "指南",
          collapsed: false,
          items: [component("安装与 Token", "/#guide-install")],
        },
        ...componentsSidebar["/components/"],
      ],
    },
  },
});
