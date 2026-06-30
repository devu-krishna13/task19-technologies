import ServicePageTemplate from '../../components/ServicePageTemplate'
import { services } from '../../constants/services'
export default function WebDevelopment() {
  return <ServicePageTemplate service={services.find(s => s.id === 'web-development')} />
}
