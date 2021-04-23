## Note

### Folder structure

```
src
|__components (tên của các folder con nên ghi hoa: shared components between features) - ĐÂY LÀ FOLDER CHỨA CÁC COMPONENT ĐƯỢC DÙNG ĐI DÙNG LẠI Ở NHIỀU CHỖ NHƯ LOADING, NAVBAR, FOOTER, HEADER.... và dùng ở nhiều feature khác nhau
|   |__index.jsx
|   |__style.scss
|
|__features ()
|   |__ TodoFeature //container component
|       |__components được dùng trong feature này (components of Todo Feature) //các presentational component
        |__pages (những page của feature ToDo có sử dụng components trên)
        |__index.jsx (entry point of feature ToDoFeature)
|
| App.js
```
