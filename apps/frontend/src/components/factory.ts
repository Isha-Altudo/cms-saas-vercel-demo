import 'server-only'
import { type ComponentFactory, DefaultComponentFactory, RichTextComponentDictionary } from '@remkoj/optimizely-cms-react/rsc'
import cmsComponents from './cms'

// Create the server factory, to be reused throughout the application
export const factory : ComponentFactory = new DefaultComponentFactory()
factory.registerAll(RichTextComponentDictionary)
factory.registerAll(cmsComponents)
factory.registerAll(cmsComponents.map(component => ({
	...component,
	type: typeof component.type === 'string'
		? ['ChangesetItem', ...component.type.split('/')]
		: ['ChangesetItem', ...component.type]
})))

/**
 * Get the cached version of the Component Factory to use, this ensure that the
 * minimum number of instances of the factory will be created.
 */
export const setupFactory = () => factory;

export default setupFactory