import Link from 'next/link';
export const NavigateToAddContactAction = () => {
  return (
    <Link href={'/add-contact'}>
      Add New
    </Link>
  );
};
