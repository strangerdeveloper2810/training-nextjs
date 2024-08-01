## React Server Components (RSC) là gì

React server component được giới thiệu nhằm cải thiện hiệu suất và trải nghiệm phát triển cho các ứng dụng web trong phiên bản React 18, và nhanh chóng được áp dụng ở Next.js

Server component:
. Đọc những file hoặc lấy dữ liệu từ DB
. Không sử dụng được các hook

Client component:
. Không đọc được những file hoặc lấy dữ liệu từ DB
. Sử dụng được hook

Từ Next.js version 13 thì tất cả component trong Next.js đều là server component, nếu muốn dùng client component thì thêm tag "use client" ở mỗi đầu component
