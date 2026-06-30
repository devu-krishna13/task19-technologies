import ServicePageTemplate from '../../components/ServicePageTemplate'
import { services } from '../../constants/services'
export default function QATesting() {
  return <ServicePageTemplate service={services.find(s => s.id === 'qa-testing')} />
}
