import ServicePageTemplate from '../../components/ServicePageTemplate'
import { services } from '../../constants/services'
export default function CloudSolutions() {
  return <ServicePageTemplate service={services.find(s => s.id === 'cloud-solutions')} />
}
