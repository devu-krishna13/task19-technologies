import ServicePageTemplate from '../../components/ServicePageTemplate'
import { services } from '../../constants/services'
export default function DigitalTransformation() {
  return <ServicePageTemplate service={services.find(s => s.id === 'digital-transformation')} />
}
