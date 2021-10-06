class CurrenciesController < AuthenticationController
  def currency
    @currency = Currency.find(params[:id])
  end

  # GET /currency
  def index
    @currencies = Currency.all
    render json: @currencies
  end
  
  #GET /currency/1
  def show
    @currency = Currency.find(params[:id])
    render json: @currency
  end

  #PUT /currency/1
  def update
    @currency = Currency.find(params[:id])
      if @currency.update(currency_params) {
      render json: @currency, status: :updated
      }
    else
      render json: @currency.errors, status: :unprocessable_entity
    end
  end

  #DELETE /currency/1
  def destroy
      @currency = Currency.find(params[:id])
      @currency.destroy
      render json: @currency, status: :deleted
  end

  #Search for currencies
  def search
    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
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

  private

  def currency
    @currency ||= Currency.find(params[:id])
  end

  def currency_params
    params.require(:currency).permit(:description)
  end
end