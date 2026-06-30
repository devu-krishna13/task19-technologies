import ServicePageTemplate from '../../components/ServicePageTemplate'
import { services } from '../../constants/services'
export default function MobileAppDevelopment() {
  return <ServicePageTemplate service={services.find(s => s.id === 'mobile-app-development')} />
}
