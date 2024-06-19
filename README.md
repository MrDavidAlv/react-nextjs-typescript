# Proyecto React con Next.js, TypeScript, Axios y Tailwind CSS

<div align="center" style="background-color: grey; padding: 10px;">
    <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="Typescript" alt="Typescript" width="40" height="40"/>
    </a>
    <a href="https://nextjs.org/learn" target="_blank">
        <img src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original-wordmark.svg" title="Next.js" alt="Next.js" width="40" height="40"/>
    </a>
    <a href="https://react.dev/" target="_blank">
        <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>
    </a>
</div>




Este proyecto es una aplicación web básica que utiliza Next.js como framework de React, TypeScript para tipado estático, Axios para hacer peticiones HTTP a una API externa, y Tailwind CSS para estilizar la interfaz de usuario.

## Instalación

Asegúrate de tener Node.js y npm instalados en tu máquina. Luego, sigue estos pasos:

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/MrDavidAlv/react-nextjs-typescript.git

   cd react-nextjs-typescript
2. **Instalación de Tailwind CSS**

   ```bash
   npm install
## Configuración
1. **Instalación de Tailwind CSS:**

   ```bash
   npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
2. **Configuración de Tailwind CSS:**

   ```bash
   npx tailwindcss init -p
3. **Integración con PostCSS:**

   ```javascript
   module.exports = {
    plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    };
## Axios
1. **Instalación de Axios:**
   ```bash
   npm install axios
2. **Configuración de Axios:**

En este proyecto, Axios se configura en src/utils/axiosInstance.ts. Asegúrate de que la configuración de Axios sea la adecuada para tu caso de uso.

## Estructura del Proyecto
   ```bash
   react-nextjs-typescript/
   │
   ├── src/
   │   ├── components/
   │   │   └── PostTable.tsx
   │   │
   │   ├── pages/
   │   │   ├── post/
   │   │   │   └── [id].tsx
   │   │   └── index.tsx
   │   │
   │   └── utils/
   │       └── axiosInstance.ts
   │
   ├── public/
   │   ├── favicon.ico
   │   └── vercel.svg
   │
   ├── styles/
   │   ├── globals.css
   │   └── Home.module.css
   │
   ├── tailwind.config.js
   ├── postcss.config.js
   ├── tsconfig.json
   ├── next.config.js
   ├── package.json
   ├── package-lock.json
   └── README.md
   ```

## Uso

1. **Ejecuta la aplicación:**
   ```bash
   npm run dev
   ```
   Esto iniciará el servidor de desarrollo de Next.js en http://localhost:3000.

2. **Navegación:**

   * La página principal muestra una tabla de posts desde la API.
   * Al hacer clic en un título de post, se redirige a una página de detalles del post.

   ![Tabla de posts](/images/table.PNG)
   _Tabla de posts desde la API_

   ![Detalles del post](/images/item.PNG)
   _Vista de detalles de un post_


## Referencia
Este proyecto se basa en el tutorial [Clon de X con Next.js 13, Supabase, React, TypeScript y TailwindCSS](https://www.youtube.com/watch?v=V_kD2q_aoy8) del youtuber [midulive](https://www.youtube.com/@midulive)
