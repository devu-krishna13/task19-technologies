import ServicePageTemplate from '../../components/ServicePageTemplate'
import { services } from '../../constants/services'
export default function DevOps() {
  return <ServicePageTemplate service={services.find(s => s.id === 'devops')} />
}
