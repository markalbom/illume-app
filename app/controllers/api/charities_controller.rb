module Api
  class CharitiesController < ApplicationController
    def index

      @query = params[:query].gsub(' ', '%20')
      puts @query
      @selectedCity = params[:selectedCity].gsub(' ', '%20')
      puts @selectedCity

      @response = HTTParty.get('https://api.data.charitynavigator.org/v2/Organizations?app_id=85d73d7b&app_key=07027c108e44b7149df3721e757969de&search='+@query+'&rated=true&city='+@selectedCity+'&sort=RELEVANCE%3ADESC')

      if @response.ok?
        render json: {response_data: @response.body}
      else
        render nothing: true, status: :bad_request
      end

    end

    def create
      @corp = Charity.all
    end
  end
end



