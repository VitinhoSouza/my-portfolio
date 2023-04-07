import { useTranslation } from "react-i18next";

export function NotFound() {

  const { t } = useTranslation('notFound');

  return (
    <h1
      style={{
        width: "100%",
        height: "69.9vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        fontFamily:"Oswald"
      }}
    >
      <p>{t('message')}</p>
    </h1>
  );
}
