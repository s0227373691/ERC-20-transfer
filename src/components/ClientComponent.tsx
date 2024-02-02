import { useState, useEffect } from "react";

export default function ClientComponent({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{isClient && <>{children}</>}</>;
}
