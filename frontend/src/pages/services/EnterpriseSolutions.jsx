import ServicePageTemplate from '../../components/ServicePageTemplate'
import { services } from '../../constants/services'
export default function EnterpriseSolutions() {
  return <ServicePageTemplate service={services.find(s => s.id === 'enterprise-solutions')} />
}
