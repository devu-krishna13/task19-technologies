import ServicePageTemplate from '../../components/ServicePageTemplate'
import { services } from '../../constants/services'
export default function SoftwareDevelopment() {
  return <ServicePageTemplate service={services.find(s => s.id === 'software-development')} />
}
