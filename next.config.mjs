import withNextIntl from 'next-intl';
import i18n from './i18n.ts';

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl(i18n);

export default nextConfig;
