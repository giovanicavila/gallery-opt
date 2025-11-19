import { Button } from "@/components/ui/button";
import { useCartReducer } from "./cart";

export function CartComponent() {
	const [state, dispatch] = useCartReducer();

	const handleRemoveItem = (id: number) => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};

	const AddItem = () => {
		dispatch({
			type: "ADD_ITEM",
			payload: {
				id: Date.now(),
				name: "Novo item",
				price: 10,
			},
		});
	};

	const clearCart = () => {
		dispatch({
			type: "CLEAR_CART",
		});
	};

	return (
		<div>
			<h1>Cart component</h1>
			<main className="mt-10">
				<Button className="mb-6" onClick={AddItem}>
					Adicionar item
				</Button>

				{state.cartItems.map((item) => (
					<div className="flex items-center mb-4 gap-2" key={item.id}>
						{item.name} - {item.price}
						<Button
							onClick={() => handleRemoveItem(item.id)}
							variant="destructive"
						>
							Remove
						</Button>
					</div>
				))}

				<Button onClick={clearCart} variant="ghost">
					Remove all
				</Button>

				<div className="mt-12 flex items-center gap-2">
					<h4>Total items</h4>
					<p className="text-blue-500">{state.cartItems.length}</p>
				</div>
			</main>
		</div>
	);
}
