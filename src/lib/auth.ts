// import NextAuth from "next-auth";

// import Credentials from "next-auth/providers/credentials";

// export const {
//   handlers: { GET, POST },
//   signIn,
//   signOut,
//   auth,
// } = NextAuth({
//   providers: [
//     Credentials({
//       authorize: async (credentials) => {
//         try {
//           const response = await fetch("http://localhost:9999/users/login", {
//             method: "post",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               email: credentials.email,
//               password: credentials.password,
//             }),
//             credentials: "include",
//           });

//           console.log(response.status, "auth");
//           if (response.status === 400) {
//             return {error : "비밀번호, 이메일이 옮바르지 않습니다"};
//           }
//           if (response.status === 401) {
//             return {error : "비밀번호, 이메일이 옮바르지 않습니다"};;
//           }
//           const user = await response.json();
//           return { email: user.email };
//         } catch (e) {
//           console.log(e);
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login", // 커스텀 로그인 페이지
//     // 다른 페이지 구성 가능
//   },
//   //   session: {
//   //     strategy: "jwt",
//   //     maxAge: 10, // default 30일 -> 10초로 변경
//   //   },
// });
import NextAuth from "next-auth";

import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const response = await fetch("http://localhost:9999/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
          credentials: "include",
        });

        if (response.status === 400 || response.status === 401) {
          return null;
        }

        const user = await response.json();

        return { email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login", // 커스텀 로그인 페이지
    // 다른 페이지 구성 가능
  },
  //   session: {
  //     strategy: "jwt",
  //     maxAge: 10, // default 30일 -> 10초로 변경
  //   },
});
