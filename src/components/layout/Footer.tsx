import { version } from "../../../package.json";

export default function Footer() {
  return (
    <div className="py-4 text-center text-gray-500">
      <p>© 2024 - { new Date().getFullYear() } variz.site All rights reserved. | v.{version}</p>
    </div>
  );
}
