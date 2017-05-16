require 'test_helper'

class HostsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hosts_index_url
    assert_response :success
  end

  test "should get create" do
    get hosts_create_url
    assert_response :success
  end

  test "should get edit" do
    get hosts_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get hosts_destroy_url
    assert_response :success
  end

end
