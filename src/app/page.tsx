import { redirect } from 'next/navigation';

export default function Page() {
  // Redirect to the /home route
  redirect('/home');
}

