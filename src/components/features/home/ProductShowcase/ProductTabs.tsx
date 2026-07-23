import type { Product } from "./types";

type Props = {
  products: Product[];
  selected: Product;
  onSelect: (product: Product) => void;
};

export default function ProductTabs({
  products,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-4">

      {products.map((product) => (

        <button
          key={product.id}
          onClick={() => onSelect(product)}
          className={`
            rounded-full
            px-6
            py-3
            font-semibold
            transition-all
            duration-300

            ${
              selected.id === product.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-blue-50"
            }
          `}
        >
          {product.icon}

          <span className="ml-2">
            {product.title.replace(" System", "")}
          </span>

        </button>

      ))}

    </div>
  );
}