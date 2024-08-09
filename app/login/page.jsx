'use client';

import { useState, useEffect } from 'react';
import { getCsrfToken, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SignIn() {
  const [csrfToken, setCsrfToken] = useState('');
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  const error = searchParams.get('error'); // ดึงค่าของ error query parameter

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const token = await getCsrfToken();
      setCsrfToken(token);
    };

    fetchCsrfToken();
  }, []);

  if (session) {
    router.push('/admin');
    return null; // หยุดการเรนเดอร์คอมโพเนนต์
  }

  return (
    <>
      <div className="login">
        <form method="post" className="loginform" action="/api/auth/callback/credentials">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          <input name="username" type="text" className="form-control mb-3 mt-3" placeholder="username" />

          <input name="password" type="password" className="form-control" placeholder="password" />

          {error && <p className="text-danger">Invalid username or password. Please try again.</p>} {/* แสดงข้อความข้อผิดพลาด */}

          <button type="submit" className="btn btn-info">Sign in</button>
        </form>
      </div>
    </>
  );
}
