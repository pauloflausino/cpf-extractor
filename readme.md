# 📄 CPF Extractor - Extração de CPFs de PDFs

Bem-vindo ao **CPF Extractor**, uma aplicação que permite o upload de arquivos PDF, processa-os para encontrar CPFs e exibe os resultados de forma organizada. 🚀

## 🎯 Funcionalidades
- 📂 Upload de arquivos PDF
- 🔍 Extração automática de CPFs
- ✅ Validação de formato (XXX.XXX.XXX-XX)
- 💾 Armazenamento no Firebase Realtime Database
- 🖥️ Interface amigável e intuitiva

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- Vue 2 (Options API)
- SCSS (para estilização)
- Axios (requisições HTTP)

### **Backend**
- Node.js (Express.js)
- Multer (para upload de arquivos)
- pdf-parse (extração de texto de PDFs)
- Firebase Realtime Database
- Cors (para permitir requisições do frontend)

---

## 🚀 Como Instalar e Executar

### **1️⃣ Clonar o Repositório**
```sh
git clone https://github.com/seu-usuario/cpf-extractor.git
cd cpf-extractor
```

### **2️⃣ Configurar o Backend**
```sh
cd backend
npm install
```
⚡ **Configuração do Firebase:**
1. Crie um projeto no Firebase
2. Ative o **Realtime Database**
3. Baixe a chave privada JSON e salve como `firebase-config.json` na pasta `backend`

🔥 **Rodar o Backend:**
```sh
node server.js
```

### **3️⃣ Configurar o Frontend**
```sh
cd frontend
npm install
npm run serve
```

Agora, acesse **http://localhost:8080** no navegador e faça o upload do seu PDF! 🎉

---

## 📌 Estrutura do Projeto
```
cpf-extractor/
│── backend/
│   ├── server.js
│   ├── firebase-config.json
│   ├── package.json
│── frontend/
│   ├── src/
│   │   ├── App.vue
│   │   ├── main.js
│   ├── package.json
│── README.md
```

---

## 💡 Melhorias Futuras
✅ Upload múltiplo de PDFs
✅ Validação avançada de CPF
✅ Melhor experiência visual

Contribuições são bem-vindas! Se gostou do projeto, deixe uma ⭐ no GitHub! 😉

