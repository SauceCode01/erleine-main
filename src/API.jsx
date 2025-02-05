/**
 * returns a list of products of certain quantity, category, and labels
 *
 * @param {number} quantity - number of product to load
 * @param {object} filter - filters
 * @param {boolean} ranking - true = best first || false = random order
 */
export const getProductIds = ({
	quantity = 1,
	filters = {
		categories: [],
		labels: [],
		excludeCategories: [],
		excludeLabels: [],
		excludeProductIds: [],
	},
	ranking = true,
}) => {
	// temporary
	let products = [];
	for (let i = 0; i < quantity; i++) {
		products.push(i);
	}

	return products;
};

/**
 * returns the data of a certain product using its products id. Fields will filter which data of the product will be returned.
 *
 * @param {number} id - id of product to load
 * @param {object} fields - list of specific attr to include in return
 */
export const loadProductData = ({ id = null, fields = null }) => {
	/// load product
	let idUse = id ? id : 1;

	var labels = [];
	for (let i = 0; i < 3; i++) {
		labels.push(`Label ${i}`);
	}

	const product = {
		id: idUse,
		name: "Cute cat shirt",
		categories: ["shirts"],
		labels: labels,
		variants: { color: ["white", "black"], size: ["s", "m", "l"] },
		description:
			"This is a very cute cat shirt. A very long long long description i do not know what to type random yeah random yeah yow hehe.",
		links: {
			shopee: "https://shopee.ph/erwindaguinotas",
			lazada: "https://shopee.ph/erwindaguinotas",
		},
		images: ["/img1.png", "/img2.png", "/img2.png"],
	};

	return product;
};

/**
 * returns all categories
 *
 * @param {number} quantity - number of categories to load. -1 loads all categories
 * @param {boolean} ranking - true = best first || false = random order
 * @returns
 */
export const getCategories = ({ quantity = -1, ranking = true }) => {
	let categories = [];
	let loadNumber = quantity < 0 ? 20 : quantity;
	for (let i = 0; i < loadNumber; i++) {
		categories.push(`Category ${i}`);
	}
	return categories;
};

/**
 * reutrns all labels
 *
 * @param {number} quantity -  number of labels to load. -1 loads all labels
 * @param {boolean} ranking - true = best first || false = random order
 * @returns
 */
export const getLabels = ({ quantity = -1, ranking = true }) => {
	let labels = [];
	let loadNumber = quantity < 0 ? 40 : quantity;
	for (let i = 0; i < loadNumber; i++) {
		categories.push(`Category ${i}`);
	}
	return labels;
};
