import ServicePageTemplate from '../../components/ServicePageTemplate'
import { services } from '../../constants/services'
export default function AIDevelopment() {
  return <ServicePageTemplate service={services.find(s => s.id === 'ai-development')} />
}
