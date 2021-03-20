import { Container } from "./styles";
interface HeaderProps {
  title: string;
}
export function Header({ title }: HeaderProps) {
  return <Container>{title}</Container>;
}
