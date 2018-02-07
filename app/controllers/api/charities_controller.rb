module Api
  class CharitiesController < ApplicationController
    def index

      @query = params[:query].gsub(' ', '%20')
      puts @query
      @selectedCity = params[:selectedCity].gsub(' ', '%20')
      puts @selectedCity
      @CN_id =  Rails.application.secrets.CN_api_id
      @CN_key = Rails.application.secrets.CN_api_key

      @response = HTTParty.get('https://api.data.charitynavigator.org/v2/Organizations?app_id='+@CN_id+'&app_key='+@CN_key+'&search='+@query+'&rated=true&city='+@selectedCity+'&sort=RELEVANCE%3ADESC')

      if @response.ok?
        render json: {response_data: @response.body}
      else
        render nothing: true, status: :bad_request
      end

    end

    def create
      @corp = Charity.all
    end

    def show
      @hello = 'hello'
      puts @hello
    end

  end
end


#response = HTTParty.get('https://api.data.charitynavigator.org/v2/Organizations?app_id=85d73d7b&app_key=07027c108e44b7149df3721e757969de&search='+@query+'&rated=true&city='+@selectedCity+'&sort=RELEVANCE%3ADESC')

