import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'admin' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // ตรวจสอบชื่อผู้ใช้และรหัสผ่านที่ส่งมา
        if (credentials.username === 'admin' && credentials.password === '1122') {
          // หากชื่อผู้ใช้และรหัสผ่านถูกต้อง ให้คืนค่าข้อมูลผู้ใช้
          const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };
          return user;
        } else {
          // หากไม่ถูกต้อง คืนค่าเป็น null
          return null;
        }
      }
    })
  ],

  pages: {
    signIn: '/login', // กำหนดหน้าล็อกอิน
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.token = token.token;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.token = 'some_generated_token'; // คุณสามารถสร้าง token ที่นี่ตามความเหมาะสม
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET, // ต้องแน่ใจว่าได้ตั้งค่า secret นี้ใน environment variables
});

export { handler as GET, handler as POST };
