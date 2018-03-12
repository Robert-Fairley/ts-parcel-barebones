import { Home } from '../src/Home.ts'
import 'mocha'

const mockCssModules = require('mock-css-modules');

describe('Home', function() {
	describe('#render()', function() {
		it ('should render without error', function(done) {
			mockCssModules.register(['.css']);

			const h = new Home();
			try {
				let r = h.render();
				done();
			} catch(err) {
				done(err);
			}

		});
	});
});
