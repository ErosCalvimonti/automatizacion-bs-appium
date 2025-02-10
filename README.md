# wdio-appium

Este repositorio contiene un proyecto de automatización de pruebas utilizando WebdriverIO y Appium.

## Requisitos

- Node.js (versión 12 o superior)
- Java Development Kit (JDK)
- Android SDK (para pruebas en Android)
- Xcode (para pruebas en iOS)

## Instalación

1. Clona este repositorio:
    ```
    git clone https://github.com/tu-usuario/wdio-appium.git
    ```
2. Navega al directorio del proyecto:
    ```
    cd automatizacion-bs-appium
    ```
3. Instala las dependencias:
    ```
    npm install
    ```

## Configuración

Asegúrate de tener configurados los emuladores o dispositivos físicos para Android/iOS. Modifica el archivo `wdio.conf.js` según tus necesidades.

## Ejecución de Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando en la carpeta donde se quieran ejecutar:
    ```
    npx wdio run wdio.conf.js
    ```

Para configuraciones de BrowserStack, ejecuta los archivos de configuración que contengan las siglas 'bs' dentro de su nombre con el comando:
    ```
    npx wdio run config/'el archivo que se quiera ejecutar (sea android o ios) con o sin las siglas "bs"'
    ```
