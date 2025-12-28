# harmonyos-watch-gallery-rtos ⌚

[中文](#zh) | [English](#en)

<a name="zh"></a>

## 📖 项目简介

本项目是一个专为华为 RTOS 手表（轻量级可穿戴设备）设计的相册应用示例。该项目基于 FA (Feature Ability) 编程模型，展示了如何在资源受限的硬件环境下实现流畅的图片加载、预览与交互功能。

该项目已在华为 Watch GT 6 真机上完美运行。

## 🚀 运行环境

- **硬件设备**: 华为 Watch GT 6
- **系统版本**: HarmonyOS 6.0.0.165
- **开发工具**: DevEco Studio 6.0.1 Release
- **兼容 SDK**: 5.0.5(17)
- **编程模型**: JS FA (Feature Ability)

## 📺 功能演示

https://github.com/user-attachments/assets/ca247286-cd3f-406f-a540-9b9b36d19dd0

## 📂 项目结构

本项目主要提供核心业务逻辑代码，建议将其集成至您的工程中：

- **MainAbility/**: 包含所有 HML 布局、CSS 样式及 JS 业务逻辑。
- **config.json**: 项目配置文件，包含必要的权限声明（如存储访问）。

## 🖼️ 图像资源

本示例中展示的高质量图像资源来源于我的另一个开源项目：
👉 [LINA-PAP 数据集 (Hugging Face)](https://huggingface.co/datasets/OpenCausaLab/LINA-PAP)

欢迎关注并使用这一高质量图像数据集！

## 🛠️ 快速开始

1. 在 DevEco Studio 中创建一个新的 **Lite Wearable** 项目。
2. 将本仓库 `MainAbility` 文件夹下的内容拷贝至您项目的 `entry/src/main/js/MainAbility`。
3. 参考本仓库的 `config.json` 配置您的项目权限。
4. 在 `common` 目录下放入您的图片资源，并更新代码中的路径索引。

---

<a name="en"></a>

## 📖 Introduction

This project is a Gallery application sample specifically designed for Huawei RTOS-based watches (Lite Wearables). Built with the **FA (Feature Ability)** programming model, it demonstrates efficient image loading, previewing, and interaction on resource-constrained hardware.

The project has been fully verified on physical **Huawei Watch GT 6** hardware.

## 🚀 Environment

- **Device**: Huawei Watch GT 6
- **OS Version**: HarmonyOS 6.0.0.165
- **IDE**: DevEco Studio 6.0.1 Release
- **Compatible SDK**: 5.0.5(17)
- **Model**: JS FA (Feature Ability)

## 📺 Demo

https://github.com/user-attachments/assets/ca247286-cd3f-406f-a540-9b9b36d19dd0

## 📂 Structure

This repository focuses on providing the core logic. Please integrate it into your project:

- **MainAbility/**: Contains all HML layouts, CSS styles, and JS business logic.
- **config.json**: Configuration file including necessary permission declarations (e.g., storage access).

## 🖼️ Credits

The high-quality image assets used in this demo are from my other open-source project:
👉 [LINA-PAP Dataset (Hugging Face)](https://huggingface.co/datasets/OpenCausaLab/LINA-PAP)

Feel free to explore and star this high-quality dataset!

## 🛠️ Getting Started

1. Create a new **Lite Wearable** project in DevEco Studio.
2. Copy the contents of the `MainAbility` folder into your project's `entry/src/main/js/MainAbility`.
3. Update your `config.json` based on the configuration provided in this repo.
4. Add your image assets to the `common` directory and update the path references in the code.

## 📄 License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
