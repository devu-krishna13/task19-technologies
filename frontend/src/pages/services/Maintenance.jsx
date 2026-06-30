import ServicePageTemplate from '../../components/ServicePageTemplate'
import { services } from '../../constants/services'
export default function Maintenance() {
  return <ServicePageTemplate service={services.find(s => s.id === 'maintenance')} />
}
