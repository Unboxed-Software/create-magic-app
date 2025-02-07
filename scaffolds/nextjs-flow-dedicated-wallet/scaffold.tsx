import React from 'react';
import { Template, Zombi, mergePrompts } from 'zombi';
import { createScaffold } from 'core/utils/scaffold-helpers';
import { AuthTypePrompt, NpmClientPrompt, PublishableApiKeyPrompt } from 'scaffolds/prompts';

type NextDedicatedWalletData = NpmClientPrompt.Data & PublishableApiKeyPrompt.Data & AuthTypePrompt.Data;

export default createScaffold<NextDedicatedWalletData>(
  (props) => (
    <Zombi {...props} prompts={mergePrompts(AuthTypePrompt.questions, PublishableApiKeyPrompt.questions)}>
      {(data) => (
        <>
          <Template source="./public/info.svg" />
          <Template source="./public/link_white.svg" />
          <Template source="./public/login_bg.png" />
          <Template source="./public/logo.svg" />
          <Template source="./public/redirect_bg.png" />
          <Template source="./public/favicon.ico" />
          <Template source="./public/link.svg" />
          <Template source="./.env.example" />
          <Template source="./.eslintrc.json" />
          <Template source="./.gitignore" />
          <Template source="./package.json" />
          <Template source="./postcss.config.js" />
          <Template source="./tailwind.config.js" />
          <Template source="./tsconfig.json" />
          <Template source="./README.md" />
          <Template source="./src/components/ui" />
          <Template source="./src/components/magic/cards" />
          <Template source="./src/components/magic/wallet-methods/Disconnect.tsx" />
          <Template source="./src/components/magic/wallet-methods/GetIdToken.tsx" />
          <Template source="./src/components/magic/wallet-methods/GetMetadata.tsx" />
          <Template source="./src/components/magic/Dashboard.tsx" />
          <Template source="./src/components/magic/DevLinks.tsx" />
          <Template source="./src/components/magic/Header.tsx" />
          <Template source="./src/components/magic/Login.tsx" />
          <Template source="./src/components/magic/MagicProvider.tsx" />
          <Template source="./src/components/magic/MagicDashboardRedirect.tsx" />
          <Template source="./src/pages" />
          <Template source="./src/styles" />
          <Template source="./src/utils" />

          {data.loginMethods.map((authType) => (
            <React.Fragment key={authType}>
              <Template source={`./src/components/magic/auth/${authType.replaceAll(' ', '')}.tsx`} />
              {(authType === 'Discord' ||
                authType === 'Facebook' ||
                authType === 'Github' ||
                authType === 'Google' ||
                authType === 'Twitch' ||
                authType === 'Twitter') && <Template source={`./public/social/${authType.replaceAll(' ', '')}.svg`} />}
              {authType.replaceAll(' ', '') === 'EmailOTP' && (
                <Template source="./src/components/magic/wallet-methods/UpdateEmail.tsx" />
              )}
              {authType.replaceAll(' ', '') === 'SMSOTP' && (
                <Template source="./src/components/magic/wallet-methods/UpdatePhone.tsx" />
              )}
            </React.Fragment>
          ))}
        </>
      )}
    </Zombi>
  ),

  {
    shortDescription: 'Flow Universal Wallet',
    installDependenciesCommand: NpmClientPrompt.getInstallCommand,
    startCommand: NpmClientPrompt.getStartCommand('dev'),
    flags: {
      ...NpmClientPrompt.flags,
      ...PublishableApiKeyPrompt.flags,
      ...AuthTypePrompt.flags,
    },
  },
);
