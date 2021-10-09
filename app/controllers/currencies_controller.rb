class CurrenciesController < AuthenticationController
before_action :authorize_request, only: [:add_currencies_to_users, :user_index, :destroy]

  def currency
    @currency = Currency.find(params[:id])
  end

  # GET /currency
  def index
    @currencies = Currency.all
    render json: @currencies
  end
  
  def user_index
    render json: @current_user.currencies, include: :users_currencies
  end

  #GET /currency/1
  def show
    @currency = Currency.find(params[:id])
    render json: @currency
  end

  #PUT /currency/1
  def update
    @currency = Currency.find(params[:id])
      if @currency.update(currency_params)
      render json: @currency, status: :updated
      else
      render json: @currency.errors, status: :unprocessable_entity
      end
  end

  #DELETE /currency/1
  def destroy
      @current_user.currencies.delete(params[:id])
      render json: @current_user.currencies
  end

  #Search for currencies
  def search
    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search]}%")
    render json: { currencies: @currencies }
  end

  #Calculate method will take the id and quantity then returns the calculation
  def calculate
    amount = params[:amount]
    render json: { 
      currency: currency, 
      current_price: currency.current_price,
      amount: amount, 
      value: currency.calculate_value(amount)
    }
  end

  #Method to add currencies to portfolio
def add_currencies_to_users
  @currency = Currency.find(params[:id])
  if @current_user.currencies.include?(@currency)
    @portfolio = @current_user.users_currencies.find_by(currency_id:params[:id])
  @portfolio.update(quantity: @portfolio.quantity + currency_params[:quantity].to_i)
  else 
    @current_user.users_currencies.create(quantity: currency_params[:quantity], currency:@currency)
  end
  render json: @current_user.currencies, include: :users_currencies
end

def remove_currencies_from_users
  @currency = Currency.find(params[:id])
  if @current_user.currencies.include?(@currency)
    @portfolio = @current_user.users_currencies.find_by(currency_id:params[:id])
  end
end


  private



  def currency_params
    params.require(:currency).permit(:description, :quantity)
  end
end