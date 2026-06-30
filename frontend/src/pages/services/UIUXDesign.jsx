import ServicePageTemplate from '../../components/ServicePageTemplate'
import { services } from '../../constants/services'
export default function UIUXDesign() {
  return <ServicePageTemplate service={services.find(s => s.id === 'ui-ux-design')} />
}
