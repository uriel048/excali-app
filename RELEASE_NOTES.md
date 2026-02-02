# v1.0.1 Release Notes

## Novidades

### ✨ Novo Ícone Customizado
- Substituído o ícone padrão do Electron por um ícone customizado
- O ícone agora é consistente em toda a aplicação

### ��� Correções
- **Links Externos**: Links agora abrem no navegador padrão do sistema em vez de criar novas janelas do Electron
- Implementado `setWindowOpenHandler` para melhor gerenciamento de janelas

## Mudanças Técnicas
- Atualizado `electron-main.cjs` para carregar ícone customizado
- Adicionado manipulador para abertura de links (`setWindowOpenHandler`)
- Atualizado `package.json` com referência ao novo ícone

## Como Usar
1. Clone o repositório
2. Execute `npm install`
3. Para desenvolvimento: `npm run app`
4. Para criar executável: `npm run dist`

## Requisitos
- Node.js v24+
- npm v10+
- Windows 10+ (para executável)

---
**Data**: 2 de Fevereiro de 2026
