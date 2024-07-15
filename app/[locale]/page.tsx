import dynamic from 'next/dynamic';

const Logo3D = dynamic(() => import('../../components/Logo3D'), { ssr: false });

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex items-center justify-center">
        <Logo3D />
      </div>
    </div>
  );
}
