import { ChatHeader, Logo } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ShareAgentButton from '../../features/ShareAgentButton';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const { t } = useTranslation('market');

const Header = memo(() => {
  const { styles } = useStyles();

  return (
    <ChatHeader
      left={
        <Link aria-label={'home'} href={'/'}>
          <Logo className={styles.logo} extra={t('discover')} size={36} type={'flat'} />
        </Link>
      }
      right={<ShareAgentButton />}
    />
  );
});

export default Header;
