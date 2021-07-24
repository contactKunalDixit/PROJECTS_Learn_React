import _ from 'lodash';

function paginate(items, pageNumber, pageSize) {
	const startIndex = (pageNumber - 1) * pageSize;

	return _(items).slice(startIndex).take(pageSize).value();
}

export { paginate };

// _(items) : would convert items into 'lodash' object which facilitates use of all 'lodash'  oriented methods.
// We unwrap the lodash object later by appending method value()
